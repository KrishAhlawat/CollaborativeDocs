import { auth } from "@clerk/nextjs/server";
import { Id } from "../../../../convex/_generated/dataModel";
import { Documents } from "./documents";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";

interface DocumentIdPageProps {
  params: Promise<{ documentID: Id<"documents"> }>;
}

const DocumentsIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentID } = await params;

  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) ?? undefined;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const preLoadedDocument = await preloadQuery(
    api.documents.getById,
    { id: documentID },
    { token }
  );

  if (!preLoadedDocument) {
    throw new Error("Document not found!");
  }

  return <Documents preLoadedDocument={preLoadedDocument} />;
};

export default DocumentsIdPage;
