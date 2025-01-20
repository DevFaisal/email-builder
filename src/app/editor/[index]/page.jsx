import Editor from "@/components/Editor";

export default async function EditorPage({ params }) {
  const { index } = await params;
  return (
    <main>
      <Editor ChosenIndex={index} />
    </main>
  );
}
