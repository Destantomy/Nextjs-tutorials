[slug] folder are used to catch dynamic url that use as paramter for the content.
While it was changed to [...slug] it means that the parameter may have more than one parameter. We made a complex variable to catch the parameter data url in line 1 : type DetailProductProps = {params: {slug: string}}; then if we use this kind of slug change it into type DetailProductProps = {params: {slug: string[]}}; also the slug segment becomes optional when it write as [[...slug]]