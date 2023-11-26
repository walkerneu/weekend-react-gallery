So you wanna branch-n-merge?

1. How to make a NEW branch:
  git branch branch-name-here
    👆 this will "branch off of" whatever branch you're on
       typically, we branch off main
2. How to switch to the branch you just made:
  git checkout branch-name-here
3. Write some code on your new branch. Make some commits on the new branch.
4. How to merge the new commits from your new branch back into main:
  git checkout main
    👆 this switches back to the main branch
  git merge --no-ff branch-name-here
    👆 this creates a new commit that merges your new branch
       into the main branch. DON'T FORGET HOW TO EXIT VIM!

At any point, you can do the following command if you need to know
for sure what branch you are on:
  git branch

<CardMedia
          component="img"
          height="200"
          width="200"
          image={img.url}
        />

<Typography className="descriptionBox" variant="body2" color="text.secondary">
            {img.description}
          </Typography>




<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {img.title}
          </Typography>
          <div
            data-testid="toggle"
            className="image-box" 
            onClick={toggleDescription}>
                {displayToggle()}
          </div>
          <LikeButton 
            likes={img.likes}
            imgId={img.id}
            getImgs={getImgs}/>
          <DeleteButton 
            imgId={img.id}
            getImgs={getImgs}/>
        </CardContent>
      </CardActionArea>
    </Card>


    {displayToggle()}

       <div
      data-testid="galleryItem"
      className="gallery-item">
        <h3>{img.title}</h3>
        <div
            data-testid="toggle"
            className="image-box" 