-- migrate:up
RENAME TABLE main_categories TO primary_categories,
             sub_categories TO secondary_categories,
             last_categories TO tertiary_categories;

-- migrate:down

