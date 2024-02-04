import CodeEditor from "@/components/code-editor";

function App() {
  return (
    <div className="p-2 h-screen flex flex-col gap-2">
      <CodeEditor />
      <div className="flex flex-col text-center">
        <span className="text-sm text-muted-foreground">@gubriyeeel</span>
        <div className="flex items-center justify-center gap-4 text-center text-sm">
          <a
            href="https://github.com/gubriyeeel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Github
          </a>
          <i>·</i>
          <a
            href="https://www.facebook.com/gubriyeeel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
