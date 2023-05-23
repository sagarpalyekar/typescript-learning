import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
const summaryConsole = Summary.winsAnalysisWithConsoleReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
summaryConsole.buildAndPrintReport(matchReader.matches);
