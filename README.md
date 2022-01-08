# dwimmer.fungoid

## IDEA PAD

Render each character as a CSS Flex GRID item/obj(?) have the hovered grid instance change (click to stick?) to a blinking terminal cursor, have a click ripple out [https://www.smashingmagazine.com/2021/11/3d-css-flippy-snaps-react-greensock/] (or try figure a system to do it for myself rather than directly inspired by) for math on calc'ing the ripple effect location and outward tradgectory flowon effect.   

Image resize to fit window, stateful live adjustment
    capture x/y co-ord characters/pattern, have additional x/y added for each x/y change in window size and recentre the other unique pixels (probably best to have these defined in the JSON as a set/group from VB rather than (or as a fallback try this) guess/approximate as a whole with assumed no dead space and have any y1/x1 value extracted as their own array from the overall JSON obj and defined as the respective section to then give the resizing function its variables for what to adjust)

Expand creation process to a nicer UI? all in browser?

> Apply effects through functions acting on the import data, fully manipulatable from raw to alter/extend
- Animations/Loops
    HOMEPAGE: 'dwimmer' image [https://www.instagram.com/p/CTRrCI_pljV/], rippling sheen 'wind' across name, maybe moving other shit like butterfly etc, and rainbow/alternating col array ripples with  letters
    Sheen 'rippling' effect, func to take tags data and apply that subset of the overall json obj(img) and apply a scripted configurable effect

    function applyAnim(anim, all the variables @keyframes accepts bascially)
        anim1 = func()
        anim2 = func()

        if (req.anim === 'rotate') {anim1(${other variables})} 

popup (maybe togglable) section/window (as below make it super slick and intergrated as an overlapped section of the piece, func to grab a relatively arbitrary math.floor estimate of the space it needs to draw more or less the same size window of stats for exactly what the highlighted pixel/character is written as read from the (neatly spaced and syntax coloured etc) JSON for that character/position/grid object)

STATELY rerender the relevant parts of the grid 
    States:
            - Toggle for terminal look / ^^^ JSON extracted code snippet
            - Toggle for show/hide socials/contacts etc 'buttons' 

Have some contact info section (in browser email/messenging)
Links to insta/twitter/fb/whatever (tastful || even better tastfully stylised to fit (in a way that sticks out enough to a user but is unobtrustive)...(fuck maybe build a function to add them as watermarks all tied to a </Link> to the relevant, so they're like intergrated characters from preset ascii, that the algo can overlap/replace set positions with the ascii logos > maybe have this as the default visual of the image and have a hide button to look at it without)). ...Have the ascii for the logo tied together, if any are hovered 'highlights'/'colour shifts' the whole logo's group (defined somewhere in the func to draw them into the JSON, pass down to the animation handling functions) 

Mouse Hover || Arrow Keys || Tab interaction with grid sys and site