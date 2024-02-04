import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { LANGUAGE_VERSIONS } from "@/constants";

interface LanguageSelectorProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <Select
      defaultValue={language}
      onValueChange={(language) => {
        onLanguageChange(language);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {languages.map(([language, version]) => (
          <SelectItem key={language} value={language}>
            {language} · 
            <span className="text-xs text-muted-foreground"> {version}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
