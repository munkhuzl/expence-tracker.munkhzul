    CREATE TABLE category (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL, 
        icon varchar(16),
        color varchar(16),
    )

    DROP TABLE transaction;
    CREATE TYPE transactionType AS ENUM ('INCOME', 'EXPENSE');
    CREATE TABLE transaction(
        id char(36) PRIMARY KEY,
        amount decimal(10,2),
        categoryId char(36),
        type transactionType,
        date Date,
        payee varchar(36),
        note Text,
        FOREIGN KEY (categoryId) REFERENCES category(id)
    )

insert into transaction values ('asd',1000,'1e4fe586-730b-4422-a666-df26ea41c8ab','INCOME',CURRENT_DATE , 'sarnai', 'oor');

select transaction.amount, transaction.type, category.name, category.icon from transaction left join category on transaction.categoryId= category.id
    ALTER TABLE category 
    ADD COLUMN color varchar(16),
    ADD COLUMN icon varchar(16);





SELECT * FROM category;

