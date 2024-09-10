/*
  Warnings:

  - The values [ART_PLASTIQUES,MEDIAS,MUSEE,ASSAINISSEMENT,PLUVIALE,POTABLE,ECONOMIE,RECYCLAGE,DISTRIBUTION,CONNAISSANCE,INFORMATION,URBAINE] on the enum `SousThematique` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SousThematique_new" AS ENUM ('tet_33', 'tet_37', 'tet_55', 'tet_28', 'tet_40', 'tet_53', 'tet_39', 'tet_44', 'tet_41', 'tet_36', 'tet_82', 'tet_95', 'tet_42', 'tet_88', 'tet_124', 'tet_32', 'tet_104', 'tet_27', 'tet_77', 'tet_81', 'tet_90', 'tet_83', 'tet_51', 'tet_54', 'tet_122', 'tet_45', 'tet_23', 'tet_59', 'tet_85', 'tet_24', 'tet_62', 'tet_5', 'tet_30', 'tet_91', 'tet_3', 'tet_35', 'tet_97', 'tet_79', 'tet_22', 'tet_78', 'tet_29', 'tet_34', 'tet_52', 'tet_38', 'tet_117', 'tet_56', 'tet_98', 'tet_31', 'tet_21', 'tet_4', 'tet_93', 'tet_107', 'tet_119', 'tet_43', 'tet_57', 'tet_61', 'tet_65', 'tet_49', 'tet_92', 'tet_121', 'tet_72', 'tet_6', 'tet_47', 'tet_2', 'tet_7', 'tet_111', 'tet_25', 'tet_96', 'tet_48', 'tet_60', 'tet_86', 'tet_63', 'tet_120', 'tet_13', 'tet_87', 'tet_10', 'tet_9', 'tet_46', 'tet_94', 'tet_118', 'tet_64', 'tet_15', 'tet_75', 'tet_68', 'tet_123', 'tet_109', 'tet_12', 'tet_20', 'tet_66', 'tet_105', 'tet_112', 'tet_103', 'tet_16', 'tet_108', 'tet_26', 'tet_18', 'tet_19', 'tet_71', 'tet_69', 'tet_11', 'tet_67', 'tet_76', 'tet_70', 'tet_73', 'tet_8', 'tet_14', 'tet_110', 'tet_58', 'tet_84', 'tet_50', 'tet_115', 'tet_89', 'tet_17');
ALTER TABLE "Project" ALTER COLUMN "sousThematiques" TYPE "SousThematique_new"[] USING ("sousThematiques"::text::"SousThematique_new"[]);
ALTER TYPE "SousThematique" RENAME TO "SousThematique_old";
ALTER TYPE "SousThematique_new" RENAME TO "SousThematique";
DROP TYPE "SousThematique_old";
COMMIT;
