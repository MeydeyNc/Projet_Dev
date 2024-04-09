/*
  Warnings:

  - Added the required column `list_id` to the `Transition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `Transition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Transition` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "list_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL
);
INSERT INTO "new_Transition" ("id") SELECT "id" FROM "Transition";
DROP TABLE "Transition";
ALTER TABLE "new_Transition" RENAME TO "Transition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
