import { useEffect } from 'react';

// Sets the browser tab title for the page that calls it. The Vite shell in
// index.html only has one static <title>, so without this every route would
// show the same generic tab title regardless of which page is open.
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
