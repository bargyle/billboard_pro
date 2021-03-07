class ArtistsController < ApplicationController
  before_action :set_billboard
  before_action :set_artist, only: [:show, :edit, :update, :destroy]
  def index
    @artists = @billboard.artists
    render component: 'Artists', props: { billboard: @billboard, artists: @artists }
  end

  def show
    render component: 'Artist',props: {billboard: @billboard, artist: @artist }
  end

  def new
    @artist = @billboard.artists.new
    render component: 'ArtistNew', props: {billboard: @billboard, artist: @artist }
  end

  def edit
    render component: 'ArtistEdit',props: {billboard: @billboard, artist: @artist }
  end

  private 
  def set_billboard
    @billboard = Billboard.find(params[:billboard_id])
  end
  
  def set_artist
    @artist = Artist.find(params[:id])
  end
  
  def 
    params.require(:artist).permit(:title)
  end
end
