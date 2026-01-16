/*import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";


import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";




export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          //{ Brand + Social }
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">ExamPrep</span>
            </Link>

            <p className="text-sm text-muted-foreground">
              Your trusted partner in academic success. Prepare for your university exams with confidence.
            </p>

            //{ Social Icons }
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white hover:opacity-80 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white hover:opacity-80 transition"
              >
                <Youtube size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 text-white hover:opacity-80 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 text-white hover:opacity-80 transition"
              >
                <FaTiktok size={18} />
              </a>
               <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 text-white hover:opacity-80 transition"
              >
                <FaLinkedin size={18} />
              </a>

            </div>
          </div>

          { Quick Links }
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link to="/exams" className="text-muted-foreground hover:text-primary">Practice Exams</Link></li>
              <li><Link to="/universities" className="text-muted-foreground hover:text-primary">Universities</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
            </ul>
          </div>

          {/* Courses }
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses/mathematics-1" className="text-muted-foreground hover:text-primary">Mathematics I</Link></li>
              <li><Link to="/courses/physics-1" className="text-muted-foreground hover:text-primary">Physics I</Link></li>
              <li><Link to="/courses/economics" className="text-muted-foreground hover:text-primary">Economics</Link></li>
              <li><Link to="/courses/ict" className="text-muted-foreground hover:text-primary">Logic</Link></li>
            </ul>
          </div>

          {/* Contact }
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Haramaya University
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                muhammadbr1997@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +251945012933
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ExamPrep. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
*/





import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  MessageCircle,
  Twitter,
} from "lucide-react";
import { FaTiktok, FaTelegram, FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Social */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">ExamPrep</span>
            </Link>

            <p className="text-sm text-muted-foreground">
              Your trusted partner in academic success. Prepare for your university exams with confidence.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/story.php?story_fbid=122106166700661882&id=61569856487440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white hover:scale-105 transition-all duration-200 hover:opacity-90"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@HabibuRasul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white hover:scale-105 transition-all duration-200 hover:opacity-90"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/mawlidurasul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400 text-white hover:scale-105 transition-all duration-200 hover:opacity-90"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/@habiburasul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 text-white hover:scale-105 transition-all duration-200 hover:opacity-90"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com/@Nabi_zayne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white hover:scale-105 transition-all duration-200 hover:opacity-90"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@habiburasul0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white hover:scale-105 transition-all duration-200 hover:opacity-90"
                aria-label="TikTok"
              >
                <FaTiktok size={16} />
              </a>

              {/* Telegram */}
              <a
                href="https://telegram.org/@God_Malik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500 text-white hover:scale-105 transition-all duration-200 hover:opacity-90"
                aria-label="Telegram"
              >
                <FaTelegram size={18} />
              </a>

              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/exams" className="text-muted-foreground hover:text-primary transition-colors">
                  Practice Exams
                </Link>
              </li>
              <li>
                <Link to="/universities" className="text-muted-foreground hover:text-primary transition-colors">
                  Universities
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Popular Courses
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses/mathematics-1" className="text-muted-foreground hover:text-primary transition-colors">
                  Mathematics I
                </Link>
              </li>
              <li>
                <Link to="/courses/physics-1" className="text-muted-foreground hover:text-primary transition-colors">
                  Physics I
                </Link>
              </li>
              <li>
                <Link to="/courses/economics" className="text-muted-foreground hover:text-primary transition-colors">
                  Economics
                </Link>
              </li>
              <li>
                <Link to="/courses/ict" className="text-muted-foreground hover:text-primary transition-colors">
                  Logic
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Haramaya University</span>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:muhammadbr1997@gmail.com" className="hover:underline">
                  muhammadbr1997@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+251945012933" className="hover:underline">
                  +251 945 012 933
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          © {currentYear} ExamPrep. All rights reserved.
          <div className="mt-2 text-xs">
            <Link to="/privacy" className="hover:text-primary transition-colors mx-2">
              Privacy Policy
            </Link>
            |
            <Link to="/terms" className="hover:text-primary transition-colors mx-2">
              Terms of Service
            </Link>
            |
            <Link to="/cookies" className="hover:text-primary transition-colors mx-2">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}