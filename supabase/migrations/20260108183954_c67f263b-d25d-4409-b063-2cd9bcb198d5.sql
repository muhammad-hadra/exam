-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Profiles are viewable by everyone" 
ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create exam_results table
CREATE TABLE public.exam_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  exam_type TEXT NOT NULL CHECK (exam_type IN ('quiz', 'mid', 'final')),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  time_taken INTEGER, -- seconds
  answers JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on exam_results
ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;

-- Exam results policies
CREATE POLICY "Users can view their own exam results" 
ON public.exam_results FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own exam results" 
ON public.exam_results FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anyone can view exam results for leaderboard" 
ON public.exam_results FOR SELECT USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for profiles
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public 
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (new.id, COALESCE(new.raw_user_meta_data ->> 'display_name', new.email));
  RETURN new;
END;
$$;

-- Trigger on auth.users for new signups
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Create view for leaderboard (weekly and monthly rankings)
CREATE OR REPLACE VIEW public.leaderboard_weekly AS
SELECT 
  p.user_id,
  p.display_name,
  p.avatar_url,
  er.course_id,
  er.exam_type,
  MAX(er.percentage) as best_score,
  COUNT(*) as attempts,
  AVG(er.percentage) as avg_score
FROM public.exam_results er
JOIN public.profiles p ON p.user_id = er.user_id
WHERE er.created_at >= now() - interval '7 days'
GROUP BY p.user_id, p.display_name, p.avatar_url, er.course_id, er.exam_type
ORDER BY best_score DESC;

CREATE OR REPLACE VIEW public.leaderboard_monthly AS
SELECT 
  p.user_id,
  p.display_name,
  p.avatar_url,
  er.course_id,
  er.exam_type,
  MAX(er.percentage) as best_score,
  COUNT(*) as attempts,
  AVG(er.percentage) as avg_score
FROM public.exam_results er
JOIN public.profiles p ON p.user_id = er.user_id
WHERE er.created_at >= now() - interval '30 days'
GROUP BY p.user_id, p.display_name, p.avatar_url, er.course_id, er.exam_type
ORDER BY best_score DESC;