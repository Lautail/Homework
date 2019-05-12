"""empty message

Revision ID: 63bd61926e9f
Revises: 816c75df342b
Create Date: 2019-04-17 13:48:03.122092

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '63bd61926e9f'
down_revision = '816c75df342b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('highlight_post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.Column('create_time', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['post.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('highlight_post')
    # ### end Alembic commands ###