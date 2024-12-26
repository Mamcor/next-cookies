"use server";

import { cookies } from "next/headers";

const CompenentServer = async () => {
  const cookiresStore = await cookies();

  const cookie = cookiresStore.get("CookiePersistantName");
  return (
    <div>
      <p>
        {cookie?.name} : {cookie?.value}
      </p>
    </div>
  );
};

export default CompenentServer;
