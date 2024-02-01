/*
  Warnings:

  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `aniversario` on the `funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `genero` on the `funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `funcionario` table. All the data in the column will be lost.
  - Added the required column `MoveisID` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PedidoID` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aniversario_funcionario` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_funcionario` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco_funcionario` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero_funcionario` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metas_funcionario` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_funcionario` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha_funcionario` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_funcionario` to the `funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone_funcionario` to the `funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "post_ID_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Pedido" (
    "ID_pedido" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status_pedido" TEXT NOT NULL,
    "data_pedido" DATETIME NOT NULL,
    "endereco_entrega" TEXT NOT NULL,
    "metodo_pagamento" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "data_entrega" DATETIME NOT NULL,
    "produtos_pedidos" TEXT NOT NULL,
    "frete" REAL,
    "lista_pedido" TEXT NOT NULL,
    "feedback_cliente" TEXT
);

-- CreateTable
CREATE TABLE "Movel" (
    "ID_movel" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor_movel" REAL NOT NULL,
    "nome_movel" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo_movel" TEXT NOT NULL,
    "data_atualizacao_movel" DATETIME NOT NULL,
    "data_fabricacao_movel" DATETIME NOT NULL,
    "status_movel" TEXT NOT NULL,
    "PedidoID" INTEGER NOT NULL,
    CONSTRAINT "Movel_PedidoID_fkey" FOREIGN KEY ("PedidoID") REFERENCES "Pedido" ("ID_pedido") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estoque" (
    "ID_estoque" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_categoria_movel_estoque" INTEGER NOT NULL,
    "data_entrada_estoque" DATETIME NOT NULL,
    "historico_estoque" DATETIME NOT NULL,
    "total_movel" INTEGER NOT NULL,
    "nome_estoque" TEXT NOT NULL,
    "funcionarioID" INTEGER NOT NULL,
    "MoveisID" INTEGER NOT NULL,
    CONSTRAINT "Estoque_funcionarioID_fkey" FOREIGN KEY ("funcionarioID") REFERENCES "funcionario" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Estoque_MoveisID_fkey" FOREIGN KEY ("MoveisID") REFERENCES "Movel" ("ID_movel") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transportadora" (
    "ID_transportadora" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome_transportadora" TEXT NOT NULL,
    "Status_transportadora" TEXT NOT NULL,
    "PedidoID" INTEGER NOT NULL,
    "MoveisID" INTEGER NOT NULL,
    CONSTRAINT "Transportadora_PedidoID_fkey" FOREIGN KEY ("PedidoID") REFERENCES "Pedido" ("ID_pedido") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transportadora_MoveisID_fkey" FOREIGN KEY ("MoveisID") REFERENCES "Movel" ("ID_movel") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_funcionario" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_funcionario" TEXT NOT NULL,
    "email_funcionario" TEXT NOT NULL,
    "senha_funcionario" TEXT NOT NULL,
    "aniversario_funcionario" DATETIME NOT NULL,
    "telefone_funcionario" INTEGER NOT NULL,
    "genero_funcionario" TEXT NOT NULL,
    "endereco_funcionario" TEXT NOT NULL,
    "metas_funcionario" TEXT NOT NULL,
    "status_funcionario" TEXT NOT NULL,
    "PedidoID" INTEGER NOT NULL,
    "MoveisID" INTEGER NOT NULL,
    CONSTRAINT "funcionario_PedidoID_fkey" FOREIGN KEY ("PedidoID") REFERENCES "Pedido" ("ID_pedido") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "funcionario_MoveisID_fkey" FOREIGN KEY ("MoveisID") REFERENCES "Movel" ("ID_movel") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_funcionario" ("ID") SELECT "ID" FROM "funcionario";
DROP TABLE "funcionario";
ALTER TABLE "new_funcionario" RENAME TO "funcionario";
CREATE UNIQUE INDEX "funcionario_ID_key" ON "funcionario"("ID");
CREATE UNIQUE INDEX "funcionario_email_funcionario_key" ON "funcionario"("email_funcionario");
CREATE UNIQUE INDEX "funcionario_senha_funcionario_key" ON "funcionario"("senha_funcionario");
CREATE UNIQUE INDEX "funcionario_telefone_funcionario_key" ON "funcionario"("telefone_funcionario");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_ID_pedido_key" ON "Pedido"("ID_pedido");

-- CreateIndex
CREATE UNIQUE INDEX "Movel_ID_movel_key" ON "Movel"("ID_movel");

-- CreateIndex
CREATE UNIQUE INDEX "Estoque_ID_estoque_key" ON "Estoque"("ID_estoque");

-- CreateIndex
CREATE UNIQUE INDEX "Transportadora_ID_transportadora_key" ON "Transportadora"("ID_transportadora");
