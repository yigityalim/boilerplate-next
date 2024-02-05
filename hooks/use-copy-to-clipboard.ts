import React from 'react';

function oldSchoolCopy(text: string): void {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
}

export function useCopyToClipboard(): (
  | string
  | ((value: string) => void)
  | null
)[] {
  const [state, setState] = React.useState<string | null>(null);

  const copyToClipboard = React.useCallback((value: string) => {
    const handleCopy = async (): Promise<void> => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
          setState(value);
        } else {
          throw new Error('writeText not supported');
        }
      } catch (e) {
        oldSchoolCopy(value);
        setState(value);
      }
    };

    handleCopy().catch(console.error);
  }, []);

  return [state, copyToClipboard];
}
