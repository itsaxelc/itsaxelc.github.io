import fs from "fs";
import path from "path";

import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { asset } from "@/lib/base-path";

export const metadata: Metadata = {
  title: pagesConfig.resume.metadata.title,
  description: pagesConfig.resume.metadata.description,
};

const RESUME_FILE = "/resume.pdf";

export default function ResumePage() {
  // Checked at build time: add `public/resume.pdf` and rebuild to enable it.
  const hasResume = fs.existsSync(
    path.join(process.cwd(), "public", RESUME_FILE)
  );

  return (
    <PageContainer
      title={pagesConfig.resume.title}
      description={pagesConfig.resume.description}
    >
      <div className="flex justify-center py-10">
        {hasResume ? (
          <>
            <meta httpEquiv="refresh" content={`0; url=${asset(RESUME_FILE)}`} />
            <a href={asset(RESUME_FILE)} className={buttonVariants()}>
              Open resume (PDF)
            </a>
          </>
        ) : (
          <p className="text-muted-foreground">Resume coming soon.</p>
        )}
      </div>
    </PageContainer>
  );
}
