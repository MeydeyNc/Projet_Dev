/*
  Warnings:

  - You are about to drop the column `list_id` on the `Transition` table. All the data in the column will be lost.
  - You are about to drop the column `task_id` on the `Transition` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Transition` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[transition_id]` on the table `List` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transition_id]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transition_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_Transition" ("id") SELECT "id" FROM "Transition";
DROP TABLE "Transition";
ALTER TABLE "new_Transition" RENAME TO "Transition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "List_transition_id_key" ON "List"("transition_id");

-- CreateIndex
CREATE UNIQUE INDEX "Task_transition_id_key" ON "Task"("transition_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_transition_id_key" ON "User"("transition_id");
