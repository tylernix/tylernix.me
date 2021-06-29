import db from '../../../lib/firebase';

export default async (req, res) => {
  if (req.method === 'POST') {
    // do not count page views on localhost
    // if(req.hostname.contains("localhost"))
    //   return res.status(200);

    const ref = db.ref('views').child(req.query.slug);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val()
    });
  }

  if (req.method === 'GET') {
    const snapshot = await db.ref('views').child(req.query.slug).once('value');
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
};
