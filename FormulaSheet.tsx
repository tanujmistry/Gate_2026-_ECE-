import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { formulasData } from "../data/formulas";
import { Search, BookMarked } from "lucide-react";

export default function FormulaSheet() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  const filteredFormulas = formulasData.map(subject => ({
    ...subject,
    items: subject.items.filter(item =>
      item.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.context.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(subject => subject.items.length > 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Formula Sheet</CardTitle>
        <CardDescription>Quick reference for essential ECE formulas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            type="text"
            placeholder="Search formulas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="space-y-2">
          {filteredFormulas.map((subject) => (
            <div key={subject.subject} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedSubject(
                  expandedSubject === subject.subject ? null : subject.subject
                )}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors"
              >
                <BookMarked className="w-4 h-4 text-blue-600" />
                <span className="font-medium">{subject.subject}</span>
                <span className="ml-auto text-sm text-slate-500">
                  {subject.items.length} formulas
                </span>
              </button>

              {expandedSubject === subject.subject && (
                <div className="border-t bg-slate-50/50 divide-y">
                  {subject.items.map((item, index) => (
                    <div key={index} className="p-4">
                      <div className="font-mono text-lg bg-white border rounded-lg p-3 mb-2">
                        {item.formula}
                      </div>
                      <p className="text-sm text-slate-600">{item.context}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFormulas.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            No formulas found matching "{searchQuery}"
          </div>
        )}
      </CardContent>
    </Card>
  );
}