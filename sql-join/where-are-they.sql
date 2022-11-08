SELECT "line1",
       "city"."name" AS "cityName",
       "district",
       "country"."name" AS "countryName"
FROM "addresses"
JOIN "cities" AS "city" USING ("cityId")
JOIN "countries" AS "country" USING ("countryId")
