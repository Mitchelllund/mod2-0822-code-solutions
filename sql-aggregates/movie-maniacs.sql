SELECT "firstName",
       "lastName",
       SUM("amount") AS "total"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  GROUP BY "customerId"
ORDER BY "total" DESC
