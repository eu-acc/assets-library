const style = document.createElement("style");
style.innerHTML = `
    .prismjs {
        background: #F6F6F6 !important;
    }

    #logoPreviewDark,
    #logoPreviewLight,
    #logoPreviewGrey,
    #logoPreviewMist {
        border-radius: 5px;
        border: 1px solid #eaeaea;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
        padding: 60px 30px;
        text-align: center;
    }
    #logoPreviewDark {
        background: #000;
    }
    #logoPreviewLight {
        background: #fff;
    }
    #logoPreviewGrey {
        background: #242525;
    }
    #logoPreviewMist {
        background: #efefef;
    }

    #linkDownload {
        background: #000;
        border-radius: 30px;
        color: #fff;
        display:inline-block;
        line-height: 12px;
        padding: 12px 24px;
    }
    #linkDownload:hover {
        opacity: 0.6;
    }

    .imgAvatar {
        border-radius: 50%;
        margin: 0 10px;
    }
`;
document.head.appendChild(style);
