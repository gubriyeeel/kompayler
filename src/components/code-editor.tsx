import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "@/components/language-selector";
import { CODE_SNIPPETS } from "@/constants";
import Output from "@/components/output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState("csharp");

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
      <div className="flex items-center justify-between">
        <LanguageSelector
          language={language}
          onLanguageChange={(newLanguage) => {
            onLanguageChange(newLanguage);
          }}
        />
      </div>

      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-2">
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
