const RESET = "\x1b[0m";   // Reset all styles

const FOREGROUND_COLORS = {
    BLACK: "\x1b[30m",
    RED: "\x1b[31m",
    GREEN: "\x1b[32m",
    YELLOW: "\x1b[33m",
    BLUE: "\x1b[34m",
    MAGENTA: "\x1b[35m",
    CYAN: "\x1b[36m",
    WHITE: "\x1b[37m",
  };
  
  function coloredLog(content: string, color: keyof typeof FOREGROUND_COLORS, reset: boolean = true) {
    if (!(color in FOREGROUND_COLORS)) {
      console.error("Invalid color specified.");
      return;
    }
  
    const colorCode = FOREGROUND_COLORS[color];
    const resetCode = reset ? RESET : "";
  
    console.log(`${colorCode}${content}${resetCode}`);
  }

class ColorConsole {
    print(content: string, color: keyof typeof FOREGROUND_COLORS, reset: boolean = true) {
        if (!(color in FOREGROUND_COLORS)) {
            console.error("Invalid color specified.");
            return;
          }
        
          const colorCode = FOREGROUND_COLORS[color];
          const resetCode = reset ? RESET : "";
        
          console.log(`${colorCode}${content}${resetCode}`);
    }
}


