import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const POST = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

// * You can get the list of languages here:
/*
const GET = axios.get(
  "https://emkc.org/api/v2/piston/runtimes",
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);

export const getLanguages = async () => {
  const response = await GET;
  console.log(response.data);
  return response.data;
}

getLanguages();
*/

export const executeCode = async (sourceCode: string, language: string) => {
  // @ts-ignore
  const version = LANGUAGE_VERSIONS[language];
  // @ts-ignore
  const response = await POST.post("/execute", {
    language: language,
    version,
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
export { LANGUAGE_VERSIONS };
