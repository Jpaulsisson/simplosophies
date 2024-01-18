-- CreateTable
CREATE TABLE "Post" (
    "postId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "article" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "footnote" TEXT NOT NULL,
    "tags" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postId")
);
