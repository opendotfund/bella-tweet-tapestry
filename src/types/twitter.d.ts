
interface TwitterWidgets {
  createTweet: (
    tweetId: string,
    targetEl: HTMLElement,
    options?: {
      theme?: 'light' | 'dark';
      dnt?: boolean;
      align?: 'left' | 'center' | 'right';
      [key: string]: any;
    }
  ) => Promise<HTMLElement>;
  // Add other methods as needed
}

interface TwitterJS {
  widgets: TwitterWidgets;
  // Add other properties as needed
}

declare global {
  interface Window {
    twttr?: TwitterJS;
  }
}

export {};
