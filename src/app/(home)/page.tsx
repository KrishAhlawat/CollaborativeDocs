"use client";

import { usePaginatedQuery } from "convex/react";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./documents-table";
import { useSearchParam } from "@/hooks/use-search-param";

export default function Home() {
  const [search] = useSearchParam();

  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  );

  return (
    <>
      <head>
        <link rel="icon" href="/logo.svg" />
        <title>Docs</title>
      </head>
      <div className="min-h-screen flex flex-col">
        <div className="fixed top-0 right-0 left-0 bg-white z-10 h-16 p-4">
          <Navbar />
        </div>
        <div className="mt-16">
          <TemplatesGallery />
          <DocumentsTable
            documents={results}
            loadMore={loadMore}
            status={status}
          />
        </div>
      </div>
    </>
  );
}
