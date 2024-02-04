import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (sourceCode: string, language: string) => {
  // @ts-ignore
  const version = LANGUAGE_VERSIONS[language];
  // @ts-ignore
  const response = await API.post("/execute", {
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
