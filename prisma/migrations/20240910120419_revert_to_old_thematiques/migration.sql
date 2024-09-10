/*
  Warnings:

  - The values [tet_33,tet_37,tet_55,tet_28,tet_40,tet_53,tet_39,tet_44,tet_41,tet_36,tet_82,tet_95,tet_42,tet_88,tet_124,tet_32,tet_104,tet_27,tet_77,tet_81,tet_90,tet_83,tet_51,tet_54,tet_122,tet_45,tet_23,tet_59,tet_85,tet_24,tet_62,tet_5,tet_30,tet_91,tet_3,tet_35,tet_97,tet_79,tet_22,tet_78,tet_29,tet_34,tet_52,tet_38,tet_117,tet_56,tet_98,tet_31,tet_21,tet_4,tet_93,tet_107,tet_119,tet_43,tet_57,tet_61,tet_65,tet_49,tet_92,tet_121,tet_72,tet_6,tet_47,tet_2,tet_7,tet_111,tet_25,tet_96,tet_48,tet_60,tet_86,tet_63,tet_120,tet_13,tet_87,tet_10,tet_9,tet_46,tet_94,tet_118,tet_64,tet_15,tet_75,tet_68,tet_123,tet_109,tet_12,tet_20,tet_66,tet_105,tet_112,tet_103,tet_16,tet_108,tet_26,tet_18,tet_19,tet_71,tet_69,tet_11,tet_67,tet_76,tet_70,tet_73,tet_8,tet_14,tet_110,tet_58,tet_84,tet_50,tet_115,tet_89,tet_17] on the enum `SousThematique` will be removed. If these variants are still used in the database, this will fail.
  - The values [tet_9,tet_5,tet_4,tet_10,tet_6,tet_7,tet_12,tet_1,tet_3,tet_8,tet_11,tet_2,recoco_267,recoco_83,recoco_329,recoco_58,recoco_480,recoco_277,recoco_356,recoco_452,recoco_447,recoco_432,recoco_67,recoco_72,recoco_434,recoco_504,recoco_35,recoco_521,recoco_299,recoco_73,recoco_130,recoco_390,recoco_276,recoco_451,recoco_272,recoco_294,recoco_454,recoco_498,recoco_328,recoco_139,recoco_330,recoco_289,recoco_369,recoco_264,recoco_493,recoco_363,recoco_293,recoco_71,recoco_275,recoco_430,recoco_483,recoco_287,recoco_357,recoco_409,recoco_303,recoco_505,recoco_296,recoco_355,recoco_460,recoco_178,recoco_523,recoco_378,recoco_494,recoco_297,recoco_304,recoco_283,recoco_465,recoco_366,recoco_95,recoco_478,recoco_8,recoco_298,recoco_7,recoco_318,recoco_169,recoco_300,recoco_508,recoco_193,recoco_428,recoco_306,recoco_408,recoco_401,recoco_458,recoco_522,recoco_284,recoco_273,recoco_87,recoco_403,recoco_5,recoco_429,recoco_359,recoco_463,recoco_290,recoco_457,recoco_271,recoco_26,recoco_210,recoco_474,recoco_484,recoco_358,recoco_321,recoco_281,recoco_543,recoco_295,recoco_212,recoco_411,recoco_422,recoco_10,recoco_370,recoco_404,recoco_535,recoco_473,recoco_420,recoco_6,recoco_488,recoco_222,recoco_209,recoco_79,recoco_439,recoco_291,recoco_27,recoco_322,recoco_433,recoco_514,recoco_525,recoco_314,recoco_502,recoco_520,recoco_274,recoco_365,recoco_438,recoco_280,recoco_402,recoco_455,recoco_17,recoco_9,recoco_13,recoco_540,recoco_315,recoco_456,recoco_509,recoco_387,recoco_479,recoco_415,recoco_526,recoco_482,recoco_379,recoco_539,recoco_431,recoco_324,recoco_471,recoco_443,recoco_15,recoco_367,recoco_530,recoco_354,recoco_332,recoco_491,recoco_487,recoco_313,recoco_501,recoco_312,recoco_475,recoco_513,recoco_25,recoco_323,recoco_519,recoco_497,recoco_445,recoco_288,recoco_292,recoco_529,recoco_444,recoco_14,recoco_536,recoco_481,recoco_16,recoco_528,recoco_11,recoco_301,recoco_12,recoco_327,recoco_343,recoco_302,recoco_364,recoco_527,recoco_351,recoco_213,recoco_503,recoco_307,recoco_476,recoco_472] on the enum `Thematique` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SousThematique_new" AS ENUM ('ART_PLASTIQUES', 'MEDIAS', 'MUSEE', 'ASSAINISSEMENT', 'PLUVIALE', 'POTABLE', 'ECONOMIE', 'RECYCLAGE', 'DISTRIBUTION', 'CONNAISSANCE', 'INFORMATION', 'URBAINE');
ALTER TABLE "Project" ALTER COLUMN "sousThematiques" TYPE "SousThematique_new"[] USING ("sousThematiques"::text::"SousThematique_new"[]);
ALTER TYPE "SousThematique" RENAME TO "SousThematique_old";
ALTER TYPE "SousThematique_new" RENAME TO "SousThematique";
DROP TYPE "SousThematique_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Thematique_new" AS ENUM ('CULTURE', 'EAU', 'ENERGIE', 'MOBILITE');
ALTER TABLE "Project" ALTER COLUMN "thematiques" TYPE "Thematique_new"[] USING ("thematiques"::text::"Thematique_new"[]);
ALTER TABLE "ServiceContext" ALTER COLUMN "thematiques" TYPE "Thematique_new"[] USING ("thematiques"::text::"Thematique_new"[]);
ALTER TYPE "Thematique" RENAME TO "Thematique_old";
ALTER TYPE "Thematique_new" RENAME TO "Thematique";
DROP TYPE "Thematique_old";
COMMIT;
