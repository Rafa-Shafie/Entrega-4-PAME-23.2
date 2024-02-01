-- CreateTable
CREATE TABLE "funcionario" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "aniversario" DATETIME NOT NULL,
    "telefone" INTEGER NOT NULL,
    "genero" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "post" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "funcionarioID" INTEGER NOT NULL,
    CONSTRAINT "post_funcionarioID_fkey" FOREIGN KEY ("funcionarioID") REFERENCES "funcionario" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_ID_key" ON "funcionario"("ID");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_email_key" ON "funcionario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_telefone_key" ON "funcionario"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "post_ID_key" ON "post"("ID");
