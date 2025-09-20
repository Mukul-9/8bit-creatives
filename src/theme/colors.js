// Modern Dark Theme - Inspired by Darken design
export const colors = {
  // Primary brand colors - Vibrant trio
  yellow: "#FFF200",
  magenta: "#EC008C",
  cyan: "#00FFFF",

  // Primary combinations
  primary: "#00A4E4", // Cyan as main primary
  primaryHover: "#0094D4",
  primaryDark: "#0084C4",

  // Background colors
  background: "#0D0D0D", // Very dark background
  backgroundSecondary: "#1A1A1A", // Slightly lighter
  backgroundCard: "#1F1F1F", // Card backgrounds
  backgroundHover: "#252525",

  // Text colors
  textPrimary: "#FFFFFF",
  textSecondary: "#B3B3B3",
  textMuted: "#666666",
  textDark: "#000000",

  // Border and divider colors
  border: "#333333",
  borderLight: "#404040",

  // Status colors
  success: "#00D084",
  warning: "#FFB800",
  error: "#FF4757",
  info: "#5352ED",

  // Gradient combinations (Using cyan for highlights, magenta for glows, all three for buttons)
  gradients: {
    // Text highlights - CYAN ONLY
    textHighlight: "#00FFFF", // Cyan only for text

    // Button gradients - ALL THREE COLORS
    primary: "linear-gradient(135deg, #00A4E4 0%, #EC008C 50%, #FFF200 100%)", // Cyan → Magenta → Yellow
    primaryReverse:
      "linear-gradient(135deg, #FFF200 0%, #EC008C 50%, #00A4E4 100%)", // Yellow → Magenta → Cyan
    rainbow: "linear-gradient(90deg, #00A4E4, #EC008C, #FFF200)", // All three colors horizontal
    vibrant:
      "linear-gradient(135deg, #00A4E4 0%, #EC008C 33%, #FFF200 66%, #00A4E4 100%)", // Full spectrum with cyan loop
    diagonal: "linear-gradient(135deg, #00A4E4 0%, #EC008C 50%, #FFF200 100%)", // Diagonal triple
    wave: "linear-gradient(45deg, #00A4E4 0%, #EC008C 25%, #FFF200 50%, #EC008C 75%, #00A4E4 100%)", // Wave pattern

    // Background gradients
    dark: "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 100%)",
    card: "linear-gradient(135deg, #1F1F1F 0%, #2A2A2A 100%)",

    // Glowing backdrops - MAGENTA ONLY
    glow: "radial-gradient(circle, rgba(236, 0, 140, 0.2) 0%, rgba(236, 0, 140, 0.1) 50%, rgba(236, 0, 140, 0.05) 100%)", // Magenta only
    glowMagenta:
      "radial-gradient(circle, rgba(236, 0, 140, 0.2) 0%, rgba(236, 0, 140, 0.1) 50%, rgba(236, 0, 140, 0.05) 100%)", // Magenta only
    glowSubtle:
      "radial-gradient(circle, rgba(236, 0, 140, 0.15) 0%, rgba(236, 0, 140, 0.08) 50%, rgba(236, 0, 140, 0.03) 100%)", // Subtle magenta
    glowStrong:
      "radial-gradient(circle, rgba(236, 0, 140, 0.3) 0%, rgba(236, 0, 140, 0.15) 50%, rgba(236, 0, 140, 0.08) 100%)", // Strong magenta
  },

  // Shadow effects
  shadows: {
    small: "0 2px 8px rgba(0, 0, 0, 0.3)",
    medium: "0 4px 16px rgba(0, 0, 0, 0.4)",
    large: "0 8px 32px rgba(0, 0, 0, 0.5)",
    glow: "0 0 20px rgba(0, 255, 255, 0.3)", // Cyan glow as primary
    glowStrong: "0 0 40px rgba(0, 255, 255, 0.5)",
    glowMagenta: "0 0 20px rgba(236, 0, 140, 0.3)",
    glowMagentaStrong: "0 0 40px rgba(236, 0, 140, 0.5)",
    glowCyan: "0 0 20px rgba(0, 255, 255, 0.3)",
    glowCyanStrong: "0 0 40px rgba(0, 255, 255, 0.5)",
    glowYellow: "0 0 20px rgba(255, 242, 0, 0.3)",
    glowYellowStrong: "0 0 40px rgba(255, 242, 0, 0.5)",
  },

  // Transparent overlays
  overlays: {
    dark: "rgba(0, 0, 0, 0.8)",
    light: "rgba(255, 255, 255, 0.1)",
    primary: "rgba(0, 164, 228, 0.1)", // Cyan as primary
    yellow: "rgba(255, 242, 0, 0.1)",
    magenta: "rgba(236, 0, 140, 0.1)",
    cyan: "rgba(0, 164, 228, 0.1)",
  },

  // Glassmorphism styles
  glass: {
    // Primary glass backgrounds
    primary: "rgba(0, 164, 228, 0.1)",
    secondary: "rgba(255, 255, 255, 0.05)",
    dark: "rgba(0, 0, 0, 0.2)",
    light: "rgba(255, 255, 255, 0.1)",

    // Colored glass variants
    cyan: "rgba(0, 255, 255, 0.08)",
    magenta: "rgba(236, 0, 140, 0.08)",
    yellow: "rgba(255, 242, 0, 0.08)",

    // Card backgrounds with gradient
    card: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    cardDark:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%)",

    // Button backgrounds
    buttonPrimary:
      "linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(236, 0, 140, 0.15) 50%, rgba(255, 242, 0, 0.1) 100%)",
    buttonSecondary: "rgba(255, 255, 255, 0.08)",
    buttonHover: "rgba(255, 255, 255, 0.15)",

    // Borders for glass elements
    border: "rgba(255, 255, 255, 0.2)",
    borderLight: "rgba(255, 255, 255, 0.1)",
    borderColored:
      "linear-gradient(45deg, rgba(0, 255, 255, 0.3), rgba(236, 0, 140, 0.3), rgba(255, 242, 0, 0.3))",
  },

  // Backdrop blur values
  blur: {
    small: "blur(8px)",
    medium: "blur(12px)",
    large: "blur(11px)",
    xlarge: "blur(32px)",
  },
};

export default colors;
