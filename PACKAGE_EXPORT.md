# Website Package Export

Binary ZIP artifacts are intentionally excluded from version control.

To generate a local package when needed:

```bash
zip -r nereidoniafoundation-website-package.zip . -x '.git/*' -x 'nereidoniafoundation-website-package.zip' -x 'nereidoniafoundation-website.zip'
sha256sum nereidoniafoundation-website-package.zip
```
