import { Search, Github, Menu, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const GITHUB_REPO = 'Ganesh5050/Label-UI';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    // Fetch GitHub stars
    fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setStarCount(data.stargazers_count);
        }
      })
      .catch(() => {
        // Silently fail - stars will just not show
      });
  }, []);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 rounded-full border border-border bg-background/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="group flex items-center gap-2 hover:bg-accent/50 rounded-full pr-4 transition-all duration-300">
              <div className="flex items-center justify-center w-24 h-24 rounded-full hover:scale-105 transition-all duration-300">
                <img
                  src="/logo.jpeg"
                  alt="Logo"
                  className="w-20 h-20 rounded-full group-hover:animate-spin shadow-md"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">Label UI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <a href="/docs" className="px-5 py-2.5 text-lg font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              Docs
            </a>
            <a href="/docs/blocks/authentication/sign-in-form" className="px-5 py-2.5 text-lg font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              Blocks
            </a>
            <a href="/docs/components/accordion" className="px-5 py-2.5 text-lg font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              Components
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-full border border-border bg-background hover:bg-accent transition-colors cursor-text max-w-[280px] w-full">
              <Search className="w-5 h-5 text-muted-foreground" />
              <span className="text-base text-muted-foreground">Search...</span>
            </div>

            {/* Search Icon - Mobile */}
            <button className="lg:hidden p-3 rounded-full hover:bg-accent transition-colors">
              <Search className="w-6 h-6" />
            </button>

            {/* Theme Toggle - Desktop */}
            <div className="hidden lg:flex">
              <ThemeToggle />
            </div>

            {/* GitHub with Stars - Desktop */}
            <a
              href={`https://github.com/${GITHUB_REPO}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
              {starCount !== null && (
                <span className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {starCount}
                </span>
              )}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-full hover:bg-accent transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 space-y-3 border-t border-border px-4">
            <a href="/docs" className="block px-4 py-3 text-base font-medium rounded-xl hover:bg-accent">
              Docs
            </a>
            <a href="/docs/blocks/authentication/sign-in-form" className="block px-4 py-3 text-base font-medium rounded-xl hover:bg-accent">
              Blocks
            </a>
            <a href="/docs/components/accordion" className="block px-4 py-3 text-base font-medium rounded-xl hover:bg-accent">
              Components
            </a>
            <div className="flex items-center gap-4 px-4 pt-4">
              <ThemeToggle />
              <a
                href={`https://github.com/${GITHUB_REPO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                {starCount !== null && (
                  <span className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {starCount}
                  </span>
                )}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
