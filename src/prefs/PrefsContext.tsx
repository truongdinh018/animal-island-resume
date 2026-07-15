import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ui, type Lang, type Theme } from '../i18n/messages';
import { getResume } from '../data/resume';

const LANG_KEY = 'island-resume-lang';
const THEME_KEY = 'island-resume-theme';

type PrefsContextValue = {
  lang: Lang;
  theme: Theme;
  setLang: (lang: Lang) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: (typeof ui)['en'];
  resume: ReturnType<typeof getResume>;
};

const PrefsContext = createContext<PrefsContextValue | null>(null);

function readLang(): Lang {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === 'en' || saved === 'vi') return saved;
  return navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en';
}

function readTheme(): Theme {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readLang());
  const [theme, setThemeState] = useState<Theme>(() => readTheme());

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
  }, [lang]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo<PrefsContextValue>(
    () => ({
      lang,
      theme,
      setLang,
      setTheme,
      toggleTheme,
      t: ui[lang],
      resume: getResume(lang),
    }),
    [lang, theme, setLang, setTheme, toggleTheme],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error('usePrefs must be used within PrefsProvider');
  return ctx;
}
