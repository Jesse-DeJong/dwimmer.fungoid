// Socials intergration Function

// function(position, JSONxLen, JSONyLen, windowXLen, windowYLen) to
    // - Calc window size ${windowXLen, WindowYLen} / relative size and position/spacing for each ASCII logo to be inserted to the renderImage() array, const instaXLoc = ${JSONxLen} * ${value} (maybe the logo sized section of the grid can be extracted from the array and treated as (or natively support) flex box applying justifly-content-between etc for the right fit) etc
    // - Monitor current ${position} to add the hightlighted/glow/hover/selection ('spark'/'flicker/flame'/rainbow, have effect extend from the logo's characters themselves radiating an animation of sequenced characters to create a smoke etc lofi/low framerate animated effect?) effect to that ASCII logo
    // - Style the ASCII for the logos and its size & position, store as an array obj of its own relative determined size from above as a new array of x1,y1 etc etc, renderImage() and start the array[0] of x1,y1 at a calced pinpoint() for eg x2450, y73 and it grows the snippet array over what was in the rectangle there, new array replacing those sections of JSON with the function created highlighted code snippet (statefully recalculated and processed (the info only unless the window is resized, have that on its own state loop) for each new hover, find out if its more efficient for each grid item to have its own state identity, and have only the required parts of the array chagne whats reflected in the 'image'/render or way over engineering it and processing a new array is so fast its irrelevant and just have it recalc the whole image based on the user input changing (new hover, toggle flipped etc), maybe have v1 be its probably irrelevant anyway and v2... can refine it down to the smallest recalcing for posterity/pride/honour)  
    // - Create replacment array to be passed along to renderImage() to be applied in place of the relative chunck/location it should live in the editied JSON import