from django.urls import path
from . import views
from django.urls import re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('',views.apiOverview, name="api-overview"),
    #----------------------------- CLUBS ------------------------------
    path('clubs-list/',views.clubList, name="clubs-list"),
    path('clubs-list/<str:chosenClub>/',views.clubInfo, name="club-Info"),
    path('club-trophies/<str:chosenClub>/',views.clubTrophies, name="club-Trophies"),
    path('all-club-trophies/',views.allClubTrophies, name="all-club-trophies"),
    #----------------------------- PLAYERS ------------------------------
    path('players-to-buy/<str:club>/',views.playersToBuy, name="players-to-buy"),
    path('free-players',views.freePlayers, name="free-players"),
    path('insert-player/<str:club>/<str:chosenPlayer>/',views.insertPlayer, name="insert-player"), # do którego klubu jaki gracz
    path('update-player/<str:club>/<str:chosenPlayer>/',views.updatePlayer, name="update-player"), # jaki gracz i który kupuje
    path('delete-player/<str:club>/<str:chosenPlayer>/',views.deletePlayer, name="delete-player"),
    path('player-info/<str:chosenPlayer>/',views.playerInfo, name="player-Info"),
    path('free-player-info/<str:chosenPlayer>/',views.freePlayerInfo, name="free-player-info"),
    path('players-in-club/<str:club>/',views.playersInClub, name="players-in-club"),
    #----------------------------- TRAINERS ------------------------------
    path('trainers-to-buy/<str:club>/',views.trainersToBuy, name="trainers-to-buy"),
    path('free-trainers',views.freeTrainers, name="free-trainers"),
    path('insert-trainer/<str:club>/<str:chosenTrainer>/',views.insertTrainer, name="insert-trainer"),
    path('update-trainer/<str:club>/<str:chosenTrainer>/',views.updateTrainer, name="update-trainer"),
    path('delete-trainer/<str:club>/<str:chosenTrainer>/',views.deleteTrainer, name="delete-trainer"),
    path('trainer-info/<str:chosenTrainer>/',views.trainerInfo, name="trainer-Info"),
    path('free-trainer-info/<str:chosenTrainer>/',views.freeTrainerInfo, name="free-trainer-info"),
    path('trainer-in-club/<str:club>/',views.trainerInClub, name="trainer-in-club"),
    #----------------------------- CONTRACTS ------------------------------
    path('trainer-contract/<str:club>/',views.trainerContract, name="trainer-contract"),
    path('players-contracts/<str:club>/',views.playersContracts, name="players-contracts"),
    #----------------------------- NATIONS ------------------------------
    path('nation-info/<str:chosenNation>/',views.nationInfo, name="nation-Info"),
    path('nation-trophies/<str:chosenNation>/',views.nationTrophies, name="nation-Trophies"),
    path('all-nation-trophies/',views.allNationTrophies, name="all-nation-trophies"),

]