import { useState } from "react";
import { executeCode } from "@/api";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface OutputProps {
  editorRef: any;
  language: string;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const compileCode = async () => {
    const sourceCode = editorRef.current.getValue();

    // Return if source code is empty
    if (!sourceCode) return;

    try {
      setisLoading(true);
      const { run: result } = await executeCode(sourceCode, language);
      setOutput(result.output?.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error);
    } finally {
      setisLoading(false);
      editorRef.current.focus();
    }
  };

  return (
    <>
      <Button
        className="absolute right-4 top-4 flex items-center gap-2"
        onClick={() => {
          compileCode();
        }}
        disabled={isLoading}
      >
        <Play size={16} className="mr-[-4px]" />
      </Button>
      {isError ? (
        <div className="text-sm p-2 border border-red-400">
          <span className="text-sm text-red-400">{output}</span>
        </div>
      ) : (
        <div className="text-sm p-2 font-mono text-muted-foreground">
          {output ? (
            output.map((line: string, index: number) => (
              <p key={index}>{line}</p>
            ))
          ) : (
            <span className="text-sm text-muted-foreground">
              Click "Play" to see the output here.
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default Output;
