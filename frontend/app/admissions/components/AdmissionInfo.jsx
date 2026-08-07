import React from 'react';
import { FileCheck, Calendar } from 'lucide-react';

export default function AdmissionInfo() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="flex items-center gap-3">
          <FileCheck className="w-5 h-5 text-indigo-400" />
          <h3 className="text-base font-bold text-white">Required Documents</h3>
        </div>
        <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
          <li>10th & 12th Marklists / Degree Certificate</li>
          <li>Transfer Certificate (TC) & Conduct Certificate</li>
          <li>Migration Certificate (if applicable)</li>
          <li>Passport size photographs (4 copies)</li>
        </ul>
      </div>

      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-purple-400" />
          <h3 className="text-base font-bold text-white">Key Dates</h3>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Applications open throughout May - August. Contact admissions desk for spot admission details.
        </p>
      </div>
    </div>
  );
}
