console.log("MUNI emoji loaded!");

setInterval(() => {
    const imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        if (!imgs[i].classList.contains("processed")) {
            switch(imgs[i].alt) {
                case "❤":
                    imgs[i].src = " data:image/png;base64,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";
                    imgs[i].title = "Informačně přínosné"
                    break;
                case "😆":
                    imgs[i].src = " data:image/png;base64,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";
                    imgs[i].title = "Vtipné"
                    break;
                case "😮":
                    imgs[i].src = " data:image/png;base64,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";
                    imgs[i].title = "Zajímavé"
                    break;
                case "😢":
                    imgs[i].src = " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9bpSItDkYQUchQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ptIjx4Lgf7+497t4B/kaFqWbXBKBqlpGKx8RsblUMviKAMAYwAkFipp5IL2bgOb7u4ePrXZRneZ/7c4SVvMkAn0g8x3TDIt4gntm0dM77xAIrSQrxOfG4QRckfuS67PIb56LDfp4pGJnUPLFALBY7WO5gVjJU4mniiKJqlO/Puqxw3uKsVmqsdU/+wlBeW0lzneYw4lhCAkmIkFFDGRVYiNKqkWIiRfsxD/+Q40+SSyZXGYwcC6hCheT4wf/gd7dmYWrSTQrFgO4X2/4YBYK7QLNu29/Htt08AQLPwJXW9lcbwOwn6fW2FjkC+raBi+u2Ju8BlzvA4JMuGZIjBWj6CwXg/Yy+KQf03wK9a25vrX2cPgAZ6mr5Bjg4BMaKlL3u8e6ezt7+PdPq7wdhInKg45BLtgAAAAZiS0dEAEsASwBLS6EoHgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+QDDRUhCRtlneUAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAGz0lEQVR42u2ca2wUVRTHf9sWWrbQF7QslVIwLCW0uPLwE0l5FDSgEkkjoJMYIhgTa2LSkFTHB0FgDUqIUeETKIlZH6hVUYkxbaGIJEZCHYFq3Yq0gH0stFuKhUIrftihtLCzO7M70+5j/l+acjPnML+e+zp37gFTpkZSlpF07nS4CoA5QBFgB6YANiALsAJJQB/QA3QArUAz4AZOAXWiJDTEDUCnwzUeWAEsBRYC+TqYbQJqgSrgoCgJl2IOoNPhWgWsBh4DUgx0dQ34CtgvSsKXUQ3Q6XBZgQ3AOrmbDrfqgH3AHlESeqIKoNPhKgOeA2ZFwDhfD+wWJWFXxAN0OlyPAOXA4gicMA8BO0VJ+DbiADodrglABbAxClYeO4DtoiRcjAiATodrCfAysCSKlm81wDZREmrCNZQYJrz1wM4RmiTC0TRgUYmttLu6rbJuRAA6Ha6XgDeB8VG6icgAHiqxlfZXt1UeHbYu7HS4koBNwCsxtCPbCmwWJaFP64NJITiLNXgMep9XDe3CcrfdHKN5geISW+l1rd3ZogHeemAXkBzDyZVeoEyUhL26ApSXKu/rtPmPdDUBT6td4lhUwJsAfBpl6zw91olr1Cy2E1QYq4gzeMjvWxF2BMp722+IXz0abO8cLALLiW+Vh9yF5ZTU4jgHuFjmoK0Ly8nQX4iMfN5Iqx54QCkpqxSBG0x4A5ol89DUhdeZ3NTxSPDTfVcRfekpozVH5qIqAlebvPxqddBJRD63PY+xR4/RqmvA5DvPne+MwBUmPEWlyHyG6M584FKjvM9Ykkfh8nzSc1PpaOrm9x+acB++EN4bpY1mwTOF5M6egCXRwoVfPRzZfZIbV/uMeo2lwIeBAC40wuuDL85n7hr7wO+2WVnMWp7P8Y8aqHrrREg2J87MZM2uRVizbneY3KLxzFiSh2t9FZdbDTlLX6g4icgf+uieriooyRsCb7DmP1nA7JX3hmR3WcW8IfBuKT03lWUV84yKwHyZk98x0JCly8SZmQHbJxVmabaZnDqKyfdnK7bbF00mIdGwr1bmKAEsMsKbNSNwAtuaqT3BPUbFM2NzrEYBLFICaDfCW9ufnQHb2xu8mm16z1/hatd1xfbO5m4ut/xrFEC7EsApRnir+6yRltMdftta6js4tvd0SHaP7JIU22rflYxczkxRAmgzyuPnL9Ry+ruzQ/7t5IG/2V92OKw/zMHNP9PZ3D0k8g6Ix/ij6pyRAG1+dyJOh6sLSDPSc/LYUUycmck/Jy/R19uvm92sqWkkJFq4+FfXcCyoL4uSkO5vHWg12nPvlRs0H2/X3W7H2cvDuSOxKnXhJEypUZISwD6TjSr1KQHsMdmoUo8SwA6TjbohVwlgq8lGlVqVADabbFSpWQmgOx7e3pqVQlb+uHBMuJWm5FOxBCoh0UK2PYPs6Rlk29N9P6dnMC5njG8ga/LtWlrrNQ/9p5QA1kUrrLRJqeRMT78LWMDdS/44Fmwo5IvyHzXvIv1u5eTt3Fki+BvA0dakuyDl2DNISRsdkr22hk4+WPu9lkeaREmYSoDdRy3wVCTAGj81jew7oiozb5yuPk5+fUbrI7UBtyX4rowOK0BrZvIQSDnTM8i2Z5CUnKi7rxvX+vG4vXgavTRUn+PMTy1aTVQFA3gQ3/mn7keblkSLD86tqLIPHdT1VmdzN55GL+3uLjyNXjxuLx1N3eGYvCbzQXEMlMfBj4G1YQ3qNusAoBz7bWhG6GrX9YGo8v3sot3tNeJo8xNREp4IFoEA+0MBOHvlNHIKMil6eBpj0kcbAsvj9tLe6MUzKKoMOr5EgQtBI1COwhNoOKWzL7yH0reLdfufdrdfHRJV7Y1deNxebv53c6TmtDpREub6a1DKAe7TAjA9NzW0vFBvv9+o6unsjbQV1D6lBiWAe4BnUfmRZbs7+Mla57krd0XVMGeSQ1W9zAPVXVjuxmXAe2q9FJfdx5zH7Vgs/seq6z1Rm699PlC5gGDXHGqI7w/ND4mSEPCOTLBrDjvjPHUV9P0DApQvmeyIU3g71BSoUHPVazu+u2PxpBr5vQkboHzhbhu+W4zxoCZ8BSku6gJQhlgDbMF3nzaW1Qts0VLNQ3XKo7qtsq7EVtoPlMQwwNdESXhHywOackbVbZVHS2ylSUBxDMLbKkrC61ofSgjB0WZ8VS5iCh4h1oII+TtYuQDFJqK7hkIvvnInb4RqIOS0r9ydWwAHviI20TjbVmgd83QDOGhi+Q3Iw1dOKZrWeRtFSagM15BZvS0SAA4CadYP1AmkWcFSB4hmDVUdYZpVfHUCadaR1hlo1FcyN2XKVFTrf1zFWO+N/PcFAAAAAElFTkSuQmCC";
                    imgs[i].title = "Mimo"
                    break;
                case "😠":
                    imgs[i].src = " data:image/png;base64,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";
                    imgs[i].title = "Otravné"
                    break;
                case "👍":
                    //imgs[i].src = "";
                    break;
                case "👎":
                    //imgs[i].src = "";
                    break;
            }
            imgs[i].classList.add("processed");
        }        
    }
}, 200)