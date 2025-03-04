# Data Processing for The Nook E-Mall

This file outlines the one-time processes done to populate the product database for The Nook E-Mall

## Tasks Outline

### Spreadsheet

- [x] Download the ACNH Spreadsheet from [Google Sheets](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit)
- [x] Remove sheets and columns not needed
- [x] Add some made up description with ChatGPT (web UI used)
- [x] Generate csvs for checking
- [ ] Upload csvs using DBeaver

### Images
- [x] Download images from [Google Drive](https://drive.google.com/drive/folders/1XSLItEbUltVep8qP6691AAPg6EXf_DUR) 
- [x] Open an nginx server using official docker container, mounted to a certain drive in `cattoviz.com`'s machine where the images were dumped
- [x] Map the nginx port to the Nginx Proxy Manager (cattoviz's reverse proxy)


### Database
- [ ] Create the relationships
- [ ] Generate ERD for reference


## Tools used
- DBeaver
- Jupyter notebook
- Nginx
- Nginx Proxy Manager
- PostgreSQL
- Docker