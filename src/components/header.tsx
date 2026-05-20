"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, type NavMenu } from "./header/nav-data";
import { MegaMenu } from "./header/mega-menu";
import { cn } from "@/lib/utils";

type Direction = "ltr" | "rtl";
const SHELL_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const EXIT_EASE = [0.7, 0, 0.84, 0] as [number, number, number, number];
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function hasNavigableHref(href?: string): href is string {
  return Boolean(href && href !== "#");
}

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 select-none"
      aria-label="Ratoeira Hub"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-button bg-brand-primary text-text-primary shadow-btn-primary">
        <Zap className="w-4 h-4" strokeWidth={2.2} />
      </span>
      <span className="text-lg font-black tracking-tight text-text-primary">Ratoeira Hub</span>
    </Link>
  );
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <motion.span
    className="inline-flex text-current"
    animate={{ rotate: open ? 180 : 0 }}
    transition={{
      duration: 0.2,
      ease: SHELL_EASE,
    }}
    aria-hidden
  >
    <ChevronDown className="size-3.5" strokeWidth={1.6} />
  </motion.span>
);

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.34,
      ease: SHELL_EASE,
    },
  },
};

const panelVariants = {
  enter: { opacity: 0, x: 26 },
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.34,
      ease: SHELL_EASE,
    },
  },
  exit: {
    opacity: 0,
    x: -18,
    transition: {
      duration: 0.24,
      ease: EXIT_EASE,
    },
  },
};

function HeaderActions({
  mobile = false,
  onAction,
}: {
  mobile?: boolean;
  onAction?: () => void;
}) {
  const pathname = usePathname();
  const primaryLabel =
    pathname === "/solucoes/ratoeira-ads" ||
    pathname === "/solucoes/ratoeira-pages" ||
    pathname === "/solucoes/ratoeira-hub" ||
    pathname === "/integracoes/conexoes-com-ia" ||
    pathname === "/fontes-de-trafego/google-ads" ||
    pathname === "/fontes-de-trafego/meta-ads" ||
    pathname === "/quem-somos"
      ? "Começar grátis"
      : "Teste gratis";

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        mobile && "grid w-full grid-cols-2 gap-4",
      )}
    >
      <Link
        href="/design-system"
        onClick={onAction}
        className={cn(
          "select-none rounded-button border font-semibold text-text-primary transition-colors duration-150 hover:bg-surface-subdued",
          mobile
            ? "flex min-h-14 items-center justify-center border-border-default text-lg"
            : "border-border-default px-5 py-2 text-sm",
        )}
      >
        Design System
      </Link>
      <button
        type="button"
        onClick={onAction}
        className={cn(
          "flex select-none items-center justify-center gap-1.5 rounded-button bg-brand-primary text-text-primary font-black transition-colors duration-150 hover:bg-brand-primary-hover",
          mobile ? "min-h-14 text-lg" : "px-5 py-2 text-sm",
        )}
      >
        {primaryLabel}
        <ArrowRight
          className="size-3.5 shrink-0 text-text-primary"
          strokeWidth={1.6}
        />
      </button>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<Direction>("ltr");
  const [mobileStack, setMobileStack] = useState<number[]>([]);
  const navRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const activeMenu: NavMenu | null =
    activeIndex !== null ? NAV_LINKS[activeIndex]?.menu ?? null : null;

  const openMenu = useCallback((index: number) => {
    setDirection(activeIndex === null || index >= activeIndex ? "ltr" : "rtl");
    setActiveIndex(index);
  }, [activeIndex]);

  const closeMenu = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    const onDocPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!navRef.current?.contains(target)) {
        closeMenu();
      }
    };
    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, [closeMenu]);

  useEffect(() => {
    if (!mobileOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeMenu || !panelRef.current) return;
    const firstFocusable = panelRef.current.querySelector<HTMLElement>(
      FOCUSABLE_SELECTOR,
    );
    firstFocusable?.focus();
  }, [activeMenu]);

  const activeMobileIndex = mobileStack[mobileStack.length - 1] ?? null;
  const activeMobileLink =
    activeMobileIndex !== null ? NAV_LINKS[activeMobileIndex] : null;

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-border-default bg-surface-default/95 backdrop-blur supports-[backdrop-filter]:bg-surface-default/90"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="relative hidden items-center lg:flex">
            <div className="flex items-center rounded-button border border-border-default bg-surface-default px-2 py-1">
              {NAV_LINKS.map((link, index) => {
                const open = activeIndex === index && !!link.menu;
                return (
                  <div
                    key={link.label}
                    onMouseEnter={() => link.menu && openMenu(index)}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        if (!link.menu && hasNavigableHref(link.href)) {
                          window.location.href = link.href;
                          return;
                        }
                        if (link.menu) {
                          if (open) {
                            closeMenu();
                          } else {
                            openMenu(index);
                          }
                        }
                      }}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-button px-3 py-2 text-sm font-semibold transition-colors",
                        open
                          ? "bg-brand-100 text-text-primary"
                          : "text-text-secondary hover:bg-surface-subdued hover:text-text-primary",
                      )}
                    >
                      {link.label}
                      {link.menu ? <ChevronIcon open={open} /> : null}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="absolute left-1/2 top-full mt-1 w-[min(900px,calc(100vw-48px))] -translate-x-1/2">
              <MegaMenu
                menu={activeMenu}
                direction={direction}
                onMouseEnter={() => activeIndex !== null && openMenu(activeIndex)}
                onMouseLeave={closeMenu}
                panelRef={panelRef}
                onEscape={closeMenu}
              />
            </div>
          </nav>

          <div className="hidden lg:flex">
            <HeaderActions />
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() =>
              setMobileOpen((v) => {
                const next = !v;
                if (!next) setMobileStack([]);
                return next;
              })
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-button border border-border-default text-text-secondary transition-colors hover:bg-surface-subdued lg:hidden"
          >
            {mobileOpen ? (
              <X className="size-5" strokeWidth={1.9} />
            ) : (
              <Menu className="size-5" strokeWidth={1.9} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-shell"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: SHELL_EASE }}
            className="border-t border-border-default bg-surface-default lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">
              <AnimatePresence mode="wait" initial={false}>
                {activeMobileLink?.menu ? (
                  <motion.div
                    key={`mobile-submenu-${activeMobileLink.label}`}
                    variants={panelVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-4"
                  >
                    <button
                      type="button"
                      onClick={() => setMobileStack((prev) => prev.slice(0, -1))}
                      className="inline-flex items-center gap-2 rounded-button px-2 py-1 text-sm font-semibold text-text-secondary hover:bg-surface-subdued"
                    >
                      <ChevronLeft className="size-4" />
                      Voltar
                    </button>

                    <div className="space-y-4">
                      {activeMobileLink.menu.columns.map((column) => (
                        <div
                          key={column.heading}
                          className={cn(
                            "rounded-card border border-border-default p-4",
                            column.accent && "bg-surface-subdued",
                          )}
                        >
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                            {column.heading}
                          </p>
                          <div className="space-y-1">
                            {column.items.map((item) => (
                              <a
                                key={item.label}
                                href={item.href || "#"}
                                className="block w-full rounded-button px-2 py-2 text-left hover:bg-brand-100/30"
                              >
                                <span className="block text-sm font-semibold text-text-primary">
                                  {item.label}
                                </span>
                                {item.description ? (
                                  <span className="text-xs text-text-secondary">
                                    {item.description}
                                  </span>
                                ) : null}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mobile-root"
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="space-y-2"
                  >
                    {NAV_LINKS.map((link, index) => (
                      <motion.button
                        key={link.label}
                        variants={itemVariants}
                        type="button"
                        onClick={() => {
                          if (link.menu) {
                            setMobileStack((prev) => [...prev, index]);
                            return;
                          }
                          if (hasNavigableHref(link.href)) {
                            window.location.href = link.href;
                            setMobileStack([]);
                            setMobileOpen(false);
                          }
                        }}
                        className="flex w-full items-center justify-between rounded-button border border-border-default px-4 py-3 text-left"
                      >
                        <span className="text-sm font-semibold text-text-primary">
                          {link.label}
                        </span>
                        {link.menu ? (
                          <ChevronDown className="size-4 text-text-muted" />
                        ) : (
                          <ArrowRight className="size-4 text-text-muted" />
                        )}
                      </motion.button>
                    ))}

                    <div className="pt-3">
                      <HeaderActions mobile onAction={() => setMobileOpen(false)} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
