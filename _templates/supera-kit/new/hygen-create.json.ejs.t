---
to: hygen-create.json
---
{
  "about": "This is a hygen-create definitions file. The hygen-create utility creates generators that can be executed using hygen.",
  "hygen_create_version": "0.2.0",
  "name": "supera-kit",
  "files_and_dirs": {
    "hygen-create.json": true,
    "lk-cli/_templates/generator/rntsc/component.ejs.t": true,
    "lk-cli/_templates/generator/rntsc/interface.ejs.t": true,
    "lk-cli/_templates/generator/rntsc/styles.ejs.t": true
  },
  "templatize_using_name": "<%= h.inflection.camelize(name, true) %>",
  "gen_parent_dir": false
}