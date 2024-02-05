import { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import LanguageSelector from "@/components/language-selector";
import { ModeToggle } from "@/components/mode-toggle";
import Output from "@/components/output";

import { CODE_SNIPPETS } from "@/constants";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("csharp");

  useEffect(() => {
    // @ts-ignore
    setValue(CODE_SNIPPETS[language]);
  }, []);

  // @ts-ignore
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onLanguageChange = (language: string) => {
    setLanguage(language);
    // @ts-ignore
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <LanguageSelector
          language={language}
          onLanguageChange={(newLanguage) => {
            onLanguageChange(newLanguage);
          }}
        />

        <ModeToggle />
      </div>

      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full rounded-md border"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center">
            <Editor
              height="100%"
              theme="vs-dark"
              language={language}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value!)}
              options={{
                minimap: {
                  enabled: false,
                },
                tabSize: 2,
                fontSize: 14,
                tabCompletion: "on",
              }}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="p-2">
            <Output editorRef={editorRef} language={language} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default CodeEditor;
