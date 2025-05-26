-- CreateTable
CREATE TABLE "people" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "last_name" VARCHAR,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "last_name" VARCHAR,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "description" VARCHAR,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "description" VARCHAR,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
