export const LANGUAGE_VERSIONS = {
  csharp: "6.12.0",
  "c++": "10.2.0",
  java: "15.0.2",
  php: "8.2.3",
  javascript: "18.15.0",
  python: "3.10.0",
  typescript: "5.0.3",
};

export const CODE_SNIPPETS = {
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Gabriel");\n`,
  typescript: `type Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Gabriel" });\n`,
  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Gabriel")\n`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Gabriel';\necho $name;\n",
  "c++": `#include <iostream>\n\nusing namespace std;\n\nint main() {\n\tcout << "Hello World in C++" << endl;\n\treturn 0;\n}\n`,
};
