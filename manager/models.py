from django.db import models

#----------------------------- TABLES ------------------------------

class Clubs(models.Model):
    cid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    number_trophies = models.IntegerField(blank=True, null=True)
    foudation = models.IntegerField(blank=True, null=True)
    avg_age = models.FloatField(blank=True, null=True)
    photo = models.CharField(max_length=200, blank=True, null=True)
    money = models.FloatField(blank=True, null=True)
    league = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'clubs'

class Contracts(models.Model):
    mid = models.AutoField(primary_key=True)
    pid = models.ForeignKey('Players', models.DO_NOTHING, db_column='pid', blank=True, null=True)
    tid = models.ForeignKey('Trainers', models.DO_NOTHING, db_column='tid', blank=True, null=True)
    cid = models.ForeignKey(Clubs, models.DO_NOTHING, db_column='cid', blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    va1ue = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'contracts'

class Nations(models.Model):
    nid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    number_trophies = models.IntegerField(blank=True, null=True)
    ranking = models.IntegerField(blank=True, null=True)
    photo = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nations'

class Players(models.Model):
    pid = models.AutoField(primary_key=True)
    nid = models.ForeignKey(Nations, models.DO_NOTHING, db_column='nid')
    cid = models.ForeignKey(Clubs, models.DO_NOTHING, db_column='cid', blank=True, null=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    position = models.CharField(max_length=4)
    age = models.IntegerField(blank=True, null=True)
    heigth = models.FloatField(blank=True, null=True)
    foot = models.CharField(max_length=10)
    min_va1ue = models.FloatField(blank=True, null=True)
    max_va1ue = models.FloatField(blank=True, null=True)
    min_salary = models.FloatField(blank=True, null=True)
    max_salary = models.FloatField(blank=True, null=True)
    avg_rate = models.FloatField(blank=True, null=True)
    goals = models.IntegerField(blank=True, null=True)
    assists = models.IntegerField(blank=True, null=True)
    matches = models.IntegerField(blank=True, null=True)
    photo = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'players'

class Trainers(models.Model):
    tid = models.AutoField(primary_key=True)
    cid = models.ForeignKey(Clubs, models.DO_NOTHING, db_column='cid', blank=True, null=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    nid = models.IntegerField(blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    min_va1ue = models.FloatField(blank=True, null=True)
    max_va1ue = models.FloatField(blank=True, null=True)
    min_salary = models.FloatField(blank=True, null=True)
    max_salary = models.FloatField(blank=True, null=True)
    photo = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'trainers'

class Trophies(models.Model):
    qid = models.AutoField(primary_key=True)
    cid = models.ForeignKey(Clubs, models.DO_NOTHING, db_column='cid', blank=True, null=True)
    nid = models.ForeignKey(Nations, models.DO_NOTHING, db_column='nid', blank=True, null=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    year = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'trophies'

#----------------------------- VIEWS ------------------------------

class view_PlayersToBuy(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    club = models.CharField(max_length=45)
    nation = models.CharField(max_length=45)
    position = models.CharField(max_length=4)
    age = models.IntegerField(blank=True, null=True)
    heigth = models.FloatField(blank=True, null=True)
    foot = models.CharField(max_length=10)
    avg_rate = models.FloatField(blank=True, null=True)
    goals = models.IntegerField(blank=True, null=True)
    assists = models.IntegerField(blank=True, null=True)
    matches = models.IntegerField(blank=True, null=True)
    cid = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_PlayersToBuy'

class view_freePlayers(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    nation = models.CharField(max_length=45)
    position = models.CharField(max_length=4)
    age = models.IntegerField(blank=True, null=True)
    heigth = models.FloatField(blank=True, null=True)
    foot = models.CharField(max_length=10, blank=True, null=True)
    avg_rate = models.FloatField(blank=True, null=True)
    goals = models.IntegerField(blank=True, null=True)
    assists = models.IntegerField(blank=True, null=True)
    matches = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_freeplayers'

class view_TrainersToBuy(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    club = models.CharField(max_length=45)
    nation = models.CharField(max_length=45)
    age = models.IntegerField(blank=True, null=True)
    cid = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_TrainersToBuy'

class view_freeTrainers(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    nation = models.CharField(max_length=45)
    age = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_freeTrainers'

class view_player_info(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    club = models.CharField(max_length=45)
    nation = models.CharField(max_length=45)
    position = models.CharField(max_length=4)
    age = models.IntegerField(blank=True, null=True)
    heigth = models.FloatField(blank=True, null=True)
    foot = models.CharField(max_length=10)
    avg_rate = models.FloatField(blank=True, null=True)
    goals = models.IntegerField(blank=True, null=True)
    assists = models.IntegerField(blank=True, null=True)
    matches = models.IntegerField(blank=True, null=True)
    cid = models.IntegerField(blank=True, null=True)
    pid = models.IntegerField(blank=True, null=True)
    photo = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'view_player_info'

class view_free_player_info(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    nation = models.CharField(max_length=45)
    position = models.CharField(max_length=4)
    age = models.IntegerField(blank=True, null=True)
    heigth = models.FloatField(blank=True, null=True)
    foot = models.CharField(max_length=10)
    avg_rate = models.FloatField(blank=True, null=True)
    goals = models.IntegerField(blank=True, null=True)
    assists = models.IntegerField(blank=True, null=True)
    matches = models.IntegerField(blank=True, null=True)
    photo = models.CharField(max_length=200, blank=True, null=True)
    pid = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_free_player_info'

class view_trainer_info(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    club = models.CharField(max_length=45)
    nation = models.CharField(max_length=45)
    age = models.IntegerField(blank=True, null=True)
    cid = models.IntegerField(blank=True, null=True)
    photo = models.CharField(max_length=200, blank=True, null=True)
    tid = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_trainer_info'

class view_free_trainer_info(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    nation = models.CharField(max_length=45)
    age = models.IntegerField(blank=True, null=True)
    photo = models.CharField(max_length=200, blank=True, null=True)
    tid = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_free_trainer_info'

class view_club_info(models.Model):
    id = models.BigIntegerField(primary_key=True)
    cid = models.IntegerField(blank=True, null=True)
    club = models.CharField(max_length=45, blank=True, null=True)
    number_trophies = models.IntegerField(blank=True, null=True)
    foudation = models.IntegerField(blank=True, null=True)
    avg_age = models.FloatField(blank=True, null=True)
    photo = models.CharField(max_length=200, blank=True, null=True)
    money = models.FloatField(blank=True, null=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    league = models.CharField(max_length=45, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_club_info'

class view_clubs_trophies_list(models.Model):
    id = models.BigIntegerField(primary_key=True)
    trophy = models.CharField(max_length=45, blank=True, null=True)
    year = models.CharField(max_length=45, blank=True, null=True)
    club = models.CharField(max_length=45, blank=True, null=True)
    cid = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_clubs_trophies_list'

class view_nations_trophies_list(models.Model):
    id = models.BigIntegerField(primary_key=True)
    trophy = models.CharField(max_length=45, blank=True, null=True)
    year = models.CharField(max_length=45, blank=True, null=True)
    nation = models.CharField(max_length=45, blank=True, null=True)
    nid = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_nations_trophies_list'

class view_player_contracts_list(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    club = models.CharField(max_length=45, blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    va1ue = models.FloatField(blank=True, null=True)
    cid = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'view_player_contracts_list'

class view_trainer_contracts_list(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    surname = models.CharField(max_length=45, blank=True, null=True)
    club = models.CharField(max_length=45, blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    va1ue = models.FloatField(blank=True, null=True)
    cid = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'view_trainer_contracts_list'