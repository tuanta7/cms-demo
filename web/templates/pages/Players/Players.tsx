"use client";

import { EditableArea } from "@magnolia/react-editor";

type PlayersPageProps = PageType;

const PlayersPage = ({ content }: PlayersPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Players</h1>
      {content && <EditableArea content={content} />}
    </>
  );
};

export default PlayersPage;
